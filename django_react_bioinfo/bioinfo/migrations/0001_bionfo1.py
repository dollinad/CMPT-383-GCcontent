# Generated by Django 3.1 on 2020-08-12 06:40
from django.db import migrations

def create_data(apps, schema_editor):
    Bioinfo1 = apps.get_model('bioinfo', 'Bioinfo1')
    Bioinfo1(value="ATCGCGGCGCGATACGCGGC", a=0, c=0; g=0, gc=0)

class Migration(migrations.Migration):
    dependencies = [
        ('bioinfo', '0001_bioinfo1'),
    ]

    operations = [
        migrations.RunPython(create_data)
    ]