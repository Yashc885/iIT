from rest_framework.routers import DefaultRouter
from .views import FacultyViewSet, JournalViewSet, ConferenceViewSet, FDPViewSet, WorkshopViewSet, Notices_CircularsViewSet

faculty_router = DefaultRouter()
faculty_router.register(r'faculty', FacultyViewSet)

journal_router = DefaultRouter()
journal_router.register(r'journal', JournalViewSet)

conference_router = DefaultRouter()
conference_router.register(r'conference', ConferenceViewSet)

FDP_router = DefaultRouter()
FDP_router.register(r'FDP', FDPViewSet)

workshop_router = DefaultRouter()
workshop_router.register(r'workshop', WorkshopViewSet)

notices_router = DefaultRouter()
notices_router.register(r'notices', Notices_CircularsViewSet)