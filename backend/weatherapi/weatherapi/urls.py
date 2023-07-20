from django.contrib import admin
from django.urls import path, include
from rest_framework_swagger.views import get_swagger_view

schema_view = get_swagger_view(title='Pastebin API')
  
urlpatterns = [
    path('', include('weathers.urls')),
    path('admins/', admin.site.urls),
    path('swagger/', schema_view)
]