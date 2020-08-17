from django.db import models

# Create your models here.

class Bioinfo1(models.Model):
    id = models.AutoField(primary_key=True)
    value = models.TextField("value")
    isVisible = models.BooleanField("isVisible", False)
    a = models.FloatField("a", default=0.0)
    c = models.FloatField("c", default=0.0)
    g = models.FloatField("g", default=0.0)
    t = models.FloatField("t", default=0.0)
    gc = models.FloatField("gc", default=0.0)

    def __str__(self):
        return self.value