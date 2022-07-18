from django.urls import path,include
from . import views
from rest_framework.routers import DefaultRouter

route=DefaultRouter()
route.register("tokens", views.SmarttrackView)
urlpatterns = [
    path("",include(route.urls))]
#path("", views.index, name="home"),
#path("home/form/", views.form, name="form"),
#path("home/form/addproduct/", views.addproduct, name="addproduct")]