# Generated by Django 5.0.4 on 2024-05-13 09:09

import ckeditor_uploader.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0007_rename_author_name_conference_c_author_name_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Notices_Circulars',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=300)),
                ('notice_content', ckeditor_uploader.fields.RichTextUploadingField()),
                ('notice_date', models.DateField()),
                ('notice_link', models.FileField(blank=True, null=True, upload_to='notices&circulars/')),
            ],
        ),
    ]
