from rest_framework import serializers
from .models import Weather

class WeatherSerializer(serializers.Serializer):

    city_name = serializers.CharField(max_length=20, default='')
    temp = serializers.FloatField()
    wind_speed = serializers.IntegerField()
    weather_description = serializers.CharField(max_length=100, default='')
    requst_date = serializers.DateTimeField()

    def create(self, validated_data):
            """
            Create and return a new `Weather` instance, given the validated data.
            """
            return Weather.objects.create(**validated_data)

    class Meta:
        model = Weather
        fields = ['id', 'city_name', 'temp', 'wind_speed', 'weather_description', 'requst_date']

