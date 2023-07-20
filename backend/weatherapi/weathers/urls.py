from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('weathers/', views.getWeathers),
    path('weathers/<int:pk>/', views.getWeather),
    path('weathers/send/<str:city>', views.sendWeather),
]
