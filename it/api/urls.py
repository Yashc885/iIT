from django.urls import path, include, re_path
from rest_framework.routers import DefaultRouter
from server.api.urls import faculty_router, journal_router, conference_router, FDP_router, workshop_router, notices_router
from django.conf import settings
#from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls.static import static

router = DefaultRouter()
# Faculty Desc
router.registry.extend(faculty_router.registry)
router.registry.extend(journal_router.registry)
router.registry.extend(conference_router.registry)
router.registry.extend(FDP_router.registry)
router.registry.extend(workshop_router.registry)
router.registry.extend(notices_router.registry)

urlpatterns = [
    path('', include(router.urls)),
    re_path(r'^ckeditor/', include('ckeditor_uploader.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
#     urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

# urlpatterns+=staticfiles_urlpatterns()