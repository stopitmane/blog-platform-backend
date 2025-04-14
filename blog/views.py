from django.http import HttpResponse
from rest_framework import viewsets
from .models import Post
from .serializers import PostSerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

def home(request):
    return HttpResponse("Welcome to the Blog Homepage!")