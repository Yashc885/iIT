from django.db import models
from django.contrib.auth.models import User
#from django.contrib.auth.models import AbstractUser
from ckeditor_uploader.fields import RichTextUploadingField

# Create your models here.
#   class StudentLogin(models.Model):



class Faculty_desc(models.Model):
    # Additional fields
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, null=True, blank=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    post = models.CharField(max_length=100, null=True, blank=True)
    image = models.ImageField(upload_to='pfp/', null=True, blank=True)
    description = RichTextUploadingField(null=True, blank=True)
    resume = models.FileField(upload_to='resume/', blank=True, null=True)

    def __str__(self):
        return str(self.user)
    
class Journal(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    author_name = models.CharField(max_length=100)
    paper_title = models.CharField(max_length=200)
    journal_name = models.CharField(max_length=200)
    year = models.PositiveIntegerField()
    page_no = models.PositiveIntegerField()
    issue = models.DateField()
    issn_no = models.PositiveIntegerField()
    publisher = models.CharField(max_length=100)
    impact_factor = models.CharField(max_length=250)
    indexing = models.PositiveIntegerField()

    def __str__(self):
        return str(self.user)
    
class Conference(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    c_author_name = models.CharField(max_length=100)
    c_paper_title = models.CharField(max_length=200)
    c_conference_name = models.CharField(max_length=200)
    c_proceeding = models.CharField(max_length=250)
    c_year = models.PositiveIntegerField()
    c_page_no = models.PositiveIntegerField()
    c_issue = models.DateField()
    c_issn_no = models.PositiveIntegerField()
    c_publisher = models.CharField(max_length=100)
    c_impact_factor = models.CharField(max_length=250)
    c_indexing = models.PositiveIntegerField()

class FDP (models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    faculty_name = models.CharField(max_length=100)
    topic = models.CharField(max_length=100)
    duration_days = models.IntegerField(default=0)
    duration_hours = models.IntegerField(default=0)
    from_date = models.DateField()
    to_date = models.DateField()
    organised_by = models.CharField(max_length=150)

class Workshop (models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    w_faculty_name = models.CharField(max_length=100)
    w_topic = models.CharField(max_length=100)
    w_duration_days = models.IntegerField(default=0)
    w_duration_hours = models.IntegerField(default=0)
    w_from_date = models.DateField()
    w_to_date = models.DateField()
    w_organised_by = models.CharField(max_length=150)   


class Notices_Circulars (models.Model):
    title = models.CharField(max_length=300)
    notice_content = RichTextUploadingField(blank=True, null=True)
    notice_date = models.DateField()
    notice_link = models.FileField(upload_to='notices&circulars/', blank=True, null=True)

