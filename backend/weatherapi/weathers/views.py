import requests

from django.http import JsonResponse
from rest_framework.decorators import api_view

from weatherapi.settings import API_KEY
from .models import Weather
from .serializers import WeatherSerializer



'''
@api_view(['POST'])
def getObjectWeather(request):
     
    city = translator.translate(request.POST['city'], dest='en').text.replace(' ','%20')

    # source contain JSON data from API
    source = urllib.request.urlopen('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=e7c054be4474732a41b358f0cfae424a').read()
    
    # converting JSON data to a dictionary
    list_of_data = json.loads(source)

    weather = WeatherRequestSerializer.createFromJson(city, list_of_data)

    print(weather)

    return render(request, "weather/index.html", weather)
'''

def index(request):
    return JsonResponse({}, status=200)

##@api_view(['POST'])
def sendWeather(request, city: str):

    city = city.replace(' ','%20')
    if city is None or len(city) == 0:
        return JsonResponse({'error: no city provided'}, status=400)
    
    api_key = API_KEY
    url = f'https://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}'

    responce = requests.get(url)

    if responce.status_code == 200:

        weather = Weather.getfromJson(responce.json())
        serializer = WeatherSerializer(data=weather.__dict__)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        else:
            return JsonResponse(serializer.errors, status=400)
    
    else:
        return JsonResponse({'error' : 'Some error occured'}, status=400)
    
@api_view(["GET"])
def getWeathers(request):

    serializer = WeatherSerializer(Weather.objects.all(), many=True)
    return JsonResponse(data=serializer.data, safe=False, status=200)

    
def getWeather(request, pk):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        weather = Weather.objects.get(pk=pk)
    except Weather.DoesNotExist:
        return JsonResponse(status=404)

    if request.method == 'GET':
        serializer = WeatherSerializer(weather)
        return JsonResponse(serializer.data)