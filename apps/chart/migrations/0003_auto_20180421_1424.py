# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-04-21 14:24
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chart', '0002_chart_jsfile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chart',
            name='jsfile',
            field=models.FileField(blank=True, db_column='js文件', null=True, upload_to='chart/js', verbose_name='js文件'),
        ),
    ]