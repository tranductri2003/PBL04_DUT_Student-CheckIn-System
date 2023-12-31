# Generated by Django 4.2.5 on 2023-10-04 03:44

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('attendances', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='attendances',
            name='attendance_date',
            field=models.DateField(blank=True, default=datetime.datetime.now, null=True),
        ),
        migrations.AddField(
            model_name='attendances',
            name='attendance_id',
            field=models.CharField(blank=True, editable=False, max_length=255),
        ),
        migrations.AlterField(
            model_name='attendances',
            name='attendance_time',
            field=models.TimeField(blank=True, default=None, null=True),
        ),
    ]
