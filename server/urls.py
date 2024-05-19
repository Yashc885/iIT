from django.urls import path, re_path, include
from server.views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    #re_path(r'^ckeditor/', include('ckeditor_uploader.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
#     urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

# urlpatterns+=staticfiles_urlpatterns()
