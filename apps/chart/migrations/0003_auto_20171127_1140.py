# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-11-27 11:40
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('chart', '0002_auto_20171127_1137'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='chartcategory',
            options={'verbose_name': '图表类别', 'verbose_name_plural': '图表类别'},
        ),
        migrations.AlterModelOptions(
            name='hotsearch',
            options={'verbose_name': '热搜排行', 'verbose_name_plural': '热搜排行'},
        ),
        migrations.AlterModelTable(
            name='banner',
            table='轮播图片',
        ),
        migrations.AlterModelTable(
            name='chartcategory',
            table='图表类别',
        ),
        migrations.AlterModelTable(
            name='chartimage',
            table='图表图片',
        ),
        migrations.AlterModelTable(
            name='hotsearch',
            table='热搜排行',
        ),
    ]