# Generated by Django 4.2.5 on 2023-12-27 16:32

from django.db import migrations, models
import users.models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0006_newuser_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='newuser',
            name='avatar',
            field=models.ImageField(default='default.jpg', upload_to=users.models.upload_to, verbose_name='Avatar'),
        ),
    ]
