# Generated by Django 3.1 on 2020-08-16 07:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bioinfo1', '0009_auto_20200816_0008'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='bioinfo1',
            options={'get_latest_by': ['id']},
        ),
    ]
