package gcCal

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestCalcGC(t *testing.T) {
	seq := "ATCGTGCATGATCGTGCATGATCGTGCATGATCGTGCATGATCGTGCATGATCGTGCATGATCGTGCATGATCGTGCATG"
	A, C, G, T, GC := CalcGC(seq)

	assert.Equal(t, A, float64(16))
	assert.Equal(t, T, float64(24))
	assert.Equal(t, G, float64(24))
	assert.Equal(t, C, float64(16))
	assert.Equal(t, GC, float64(50))
}
