from rest_framework.serializers import ModelSerializer
from ..models import Faculty_desc, Journal, Conference, FDP, Workshop, Notices_Circulars

class FacultySerializer(ModelSerializer):
    class Meta:
        model = Faculty_desc
        fields = ('title', 'name', 'post', 'image', 'description', 'resume')

class JournalSerializer(ModelSerializer):
    class Meta:
        model = Journal
        fields = ('author_name', 'paper_title', 'journal_name', 'year', 'page_no', 'issue', 'issn_no', 'publisher', 'impact_factor', 'indexing')

class ConferenceSerializer(ModelSerializer):
    class Meta:
        model = Conference
        fields = ('c_author_name', 'c_paper_title', 'c_conference_name', 'c_proceeding', 'c_year', 'c_page_no', 'c_issue', 'c_issn_no', 'c_publisher', 'c_impact_factor', 'c_indexing')

class FDP_Serializer(ModelSerializer):
    class Meta:
        model = FDP
        fields = ('faculty_name', 'topic', 'duration_days', 'duration_hours', 'from_date', 'to_date', 'organised_by')

class WorkshopSerializer(ModelSerializer):
    class Meta:
        model = Workshop
        fields = ('w_faculty_name', 'w_topic', 'w_duration_days', 'w_duration_hours', 'w_from_date', 'w_to_date', 'w_organised_by')


class Notices_CircularsSerializer(ModelSerializer):
    class Meta:
        model = Notices_Circulars
        fields = ('title', 'notice_content', 'notice_date', 'notice_link')