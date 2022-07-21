from django.shortcuts import render
from django.urls import reverse
from django.views.decorators.csrf import csrf_protect, csrf_exempt
from rest_framework import viewsets
from .models import SmartTrackModels
from .serializers import SmartTrackSerializer
from django.template import loader
from django.http import HttpResponse,HttpResponseRedirect
class SmarttrackView(viewsets.ModelViewSet):
    serializer_class = SmartTrackSerializer
    queryset = SmartTrackModels.objects.all()