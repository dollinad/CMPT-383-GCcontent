from rest_framework import serializers
from .models import Bioinfo1
from ctypes import *
from ctypes import cdll
lib = cdll.LoadLibrary('/app/backend/main.so')

class go_string(Structure):
    _fields_ = [
        ("p", c_char_p),
        ("n", c_int)]

class result(Structure):
    _fields_ = [('aCount', c_double),
                ('cCount', c_double),
                ('gCount', c_double),
                ('tCount', c_double),
                ('gcPercent', c_double)]


class SequenceSerializer(serializers.ModelSerializer):

    a = serializers.SerializerMethodField()
    c = serializers.SerializerMethodField()
    g = serializers.SerializerMethodField()
    t = serializers.SerializerMethodField()
    gc = serializers.SerializerMethodField()
    
    def get_a(self, obj):
        b = go_string(c_char_p(obj.value.encode('utf-8')), len(obj.value))
        lib.CalcGC.restype = result
        res = lib.CalcGC(b)
        return res.aCount

    def get_c(self, obj):
        b = go_string(c_char_p(obj.value.encode('utf-8')), len(obj.value))
        lib.CalcGC.restype = result
        res = lib.CalcGC(b)
        return res.cCount
    
    def get_g(self, obj):
        b = go_string(c_char_p(obj.value.encode('utf-8')), len(obj.value))
        lib.CalcGC.restype = result
        res = lib.CalcGC(b)
        return res.gCount
    
    def get_t(self, obj):
        b = go_string(c_char_p(obj.value.encode('utf-8')), len(obj.value))
        lib.CalcGC.restype = result
        res = lib.CalcGC(b)
        return res.tCount
    
    def get_gc(self, obj):
        b = go_string(c_char_p(obj.value.encode('utf-8')), len(obj.value))
        lib.CalcGC.restype = result
        res = lib.CalcGC(b)
        return res.gcPercent
        
    class Meta:
        model = Bioinfo1
        fields = ( 'id', 'value', 'isVisible','a', 'c', 'g', 't', 'gc')