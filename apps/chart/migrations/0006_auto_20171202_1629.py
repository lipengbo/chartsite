# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-12-02 16:29
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chart', '0005_yearbooks'),
    ]

    operations = [
        migrations.AlterField(
            model_name='yearbooks',
            name='identify',
            field=models.CharField(max_length=20, primary_key=True, serialize=False, verbose_name='唯一编号'),
        ),
        migrations.AlterField(
            model_name='yearbooks',
            name='page',
            field=models.CharField(max_length=20, verbose_name='页码'),
        ),
    ]