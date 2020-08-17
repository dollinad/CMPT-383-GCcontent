from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Bioinfo1
from .serializers import *

@api_view(['GET', 'POST'])
def bioinfo1_list(request):
    if request.method == 'GET':
        data  = Bioinfo1.objects.latest('id')
        serializer = SequenceSerializer(data)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = SequenceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def bioinfo1_detail(request, id):
    try:
        bioinfo2 = Bioinfo1.objects.get(id=id)
    except Bioinfo1.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'PUT':
        serializer = SequenceSerializer(Bioinfo1, data=request.data,contex={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)   

    elif request.method == 'DELETE':
        print("DELETEDDD")
        print(bioinfo2)
        bioinfo2.delete()
        
        return Response(status=status.HTTP_204_NO_CONTENT)