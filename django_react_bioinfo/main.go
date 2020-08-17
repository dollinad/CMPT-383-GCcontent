package main

// #include <stdio.h>
// #include <errno.h>
// #include <string.h>

import (
	/*
	   typedef struct foo{
	   double aCount;
	   double cCount;
	   double gCount;
	   double tCount;
	   double gcPercent;
	   } result;
	*/
	"C"
	"fmt"
	"math"
	"strings"
)

type PartialCalc struct {
	a float64
	c float64
	g float64
	t float64
}

func Calculate(sequence string, calcChannel chan PartialCalc) {
	var countA, countC, countG, countT float64
	countA = float64(strings.Count(sequence, "a"))
	countA = countA + float64(strings.Count(sequence, "A"))
	countC = float64(strings.Count(sequence, "c"))
	countC = countC + float64(strings.Count(sequence, "C"))
	countG = float64(strings.Count(sequence, "g"))
	countG = countG + float64(strings.Count(sequence, "G"))
	countT = float64(strings.Count(sequence, "t"))
	countT = countT + float64(strings.Count(sequence, "T"))

	calcChannel <- PartialCalc{countA, countC, countG, countT}
}

//export CalcGC
func CalcGC(sequence string) C.result {
	result := C.result{}
	fmt.Println(sequence)
	calculations := make(chan PartialCalc)
	len := len(sequence)
	chunkSize := 10
	chunks := math.Ceil(float64(len) / float64(chunkSize))
	runeSeq := []rune(sequence)

	for i := 0; i < len; i += chunkSize {
		var divided string
		end := i + chunkSize
		if end > len {
			end = len
		}
		divided = string(runeSeq[i:end])
		go Calculate(divided, calculations)
	}

	for i := float64(0); i < chunks; i++ {
		countsFromChannel := <-calculations
		result.aCount += C.double(countsFromChannel.a)
		result.cCount += C.double(countsFromChannel.c)
		result.gCount += C.double(countsFromChannel.g)
		result.tCount += C.double(countsFromChannel.t)
	}
	result.gcPercent = (result.cCount + result.gCount) / (result.aCount + result.cCount + result.gCount + result.tCount) * 100

	return result

}

func main() {
}
