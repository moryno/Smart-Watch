from rest_framework import serializers
from .models import  SmartTrackModels

class SmartTrackSerializer(serializers.ModelSerializer):
    class Meta:
        model = SmartTrackModels
        fields ="__all__"