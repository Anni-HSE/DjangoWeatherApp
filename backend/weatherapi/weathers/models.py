import json
import datetime

from typing import Any
from django.db import models

# Create your models here.
class Weather(models.Model):

    city_name = models.CharField(max_length=20, default='')
    temp = models.FloatField()
    wind_speed = models.IntegerField()
    weather_description = models.CharField(max_length=100, default='')
    requst_date = models.DateTimeField()


    def getfromJson(json_data: json):
    
        weather = Weather()

        weather.city_name = str(json_data["name"])
        weather.temp = round(float(json_data["main"]["temp"]) - 273, 2)
        weather.wind_speed = int(json_data["wind"]["speed"])
        weather.weather_description = str(json_data["weather"][0]["main"])
        weather.requst_date = datetime.datetime.now()

        return weather

    class Meta:
        ordering = ['-requst_date']