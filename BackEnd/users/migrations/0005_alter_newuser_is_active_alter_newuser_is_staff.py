# Generated by Django 4.2.5 on 2023-09-11 09:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_alter_newuser_is_active_alter_newuser_is_staff'),
    ]

    operations = [
        migrations.AlterField(
            model_name='newuser',
            name='is_active',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='newuser',
            name='is_staff',
            field=models.BooleanField(default=False),
        ),
    ]
