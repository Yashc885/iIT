from rest_framework.viewsets import ModelViewSet
from ..models import Faculty_desc, Journal, Conference, FDP, Workshop, Notices_Circulars
from .serializers import FacultySerializer, JournalSerializer, ConferenceSerializer, FDP_Serializer, WorkshopSerializer, Notices_CircularsSerializer

class FacultyViewSet(ModelViewSet):
    queryset = Faculty_desc.objects.all()
    serializer_class = FacultySerializer

class JournalViewSet(ModelViewSet):
    queryset = Journal.objects.all()
    serializer_class = JournalSerializer

class ConferenceViewSet(ModelViewSet):
    queryset = Conference.objects.all()
    serializer_class = ConferenceSerializer

class FDPViewSet(ModelViewSet):
    queryset = FDP.objects.all()
    serializer_class = FDP_Serializer

class WorkshopViewSet(ModelViewSet):
    queryset = Workshop.objects.all()
    serializer_class = WorkshopSerializer


class Notices_CircularsViewSet(ModelViewSet):
    queryset = Notices_Circulars.objects.all()
    serializer_class = Notices_CircularsSerializer