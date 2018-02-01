# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-02-01 11:44
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resource', '0014_auto_20180201_1139'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='yearbooks',
            name='url',
        ),
        migrations.AlterField(
            model_name='yearbooks',
            name='caj',
            field=models.FilePathField(blank=True, db_column='CAJ', null=True, verbose_name='CAJ'),
        ),
        migrations.AlterField(
            model_name='yearbooks',
            name='excel',
            field=models.FilePathField(blank=True, db_column='EXCEL', null=True, verbose_name='EXCEL'),
        ),
        migrations.AlterField(
            model_name='yearbooks',
            name='pdf',
            field=models.FilePathField(blank=True, db_column='PDF', null=True, verbose_name='PDF'),
        ),
    ]