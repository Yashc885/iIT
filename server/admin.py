from django.contrib import admin
from django import forms
from .models import Faculty_desc, Journal, Conference, FDP, Workshop, Notices_Circulars

class FacultyDescForm(forms.ModelForm):
    class Meta:
        model = Faculty_desc
        fields = ('user', 'title', 'name', 'post', 'image', 'description', 'resume')

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

class FacultyDescAdmin(admin.ModelAdmin):
    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        is_superuser = request.user.is_superuser

        class DynamicForm(form):
            class Meta(form.Meta):
                if not is_superuser:
                    exclude = ['user']

        return DynamicForm

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        if not request.user.is_superuser:
            qs = qs.filter(user=request.user)
        return qs
    
class JournalAdmin(admin.ModelAdmin):
    def get_queryset(self, request):
        qs = super().get_queryset(request)
        if not request.user.is_superuser:
            qs = qs.filter(user=request.user)
        return qs

    def save_model(self, request, obj, form, change):
        if not request.user.is_superuser:
            obj.user = request.user
        super().save_model(request, obj, form, change)

class ConferenceAdmin(admin.ModelAdmin):
    def get_queryset(self, request):
        qs = super().get_queryset(request)
        if not request.user.is_superuser:
            qs = qs.filter(user=request.user)
        return qs

    def save_model(self, request, obj, form, change):
        if not request.user.is_superuser:
            obj.user = request.user
        super().save_model(request, obj, form, change)

class FDP_Admin(admin.ModelAdmin):
    def get_queryset(self, request):
        qs = super().get_queryset(request)
        if not request.user.is_superuser:
            qs = qs.filter(user=request.user)
        return qs

    def save_model(self, request, obj, form, change):
        if not request.user.is_superuser:
            obj.user = request.user
        super().save_model(request, obj, form, change)

class WorkshopAdmin(admin.ModelAdmin):
    def get_queryset(self, request):
        qs = super().get_queryset(request)
        if not request.user.is_superuser:
            qs = qs.filter(user=request.user)
        return qs

    def save_model(self, request, obj, form, change):
        if not request.user.is_superuser:
            obj.user = request.user
        super().save_model(request, obj, form, change)



admin.site.register(Faculty_desc, FacultyDescAdmin)
admin.site.register(Journal, JournalAdmin)
admin.site.register(Conference, ConferenceAdmin)
admin.site.register(FDP, FDP_Admin)
admin.site.register(Workshop, WorkshopAdmin)
admin.site.register(Notices_Circulars)