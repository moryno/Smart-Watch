from django.db import models

# Create your models here.
class SmartTrackModels(models.Model):
    tokenlogo = models.URLField()
    tokennames = models.CharField(max_length=2000)
    tokenprice = models.FloatField()



    def __str_(self):
        return self.tokennames
