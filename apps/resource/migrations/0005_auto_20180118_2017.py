# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-01-18 20:17
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resource', '0004_auto_20180118_2012'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='mytxdb',
            name='id',
        ),
        migrations.AlterField(
            model_name='mytxdb',
            name='code',
            field=models.CharField(db_column='索引', default='', max_length=40, primary_key=True, serialize=False, verbose_name='索引'),
        ),
    ]
