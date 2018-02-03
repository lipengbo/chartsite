# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-02-03 15:31
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('resource', '0043_gjnydbdes_category'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='zgwlrqkcdb',
            options={'verbose_name': '外来有害昆虫数据库', 'verbose_name_plural': '外来有害昆虫数据库'},
        ),
        migrations.AlterModelOptions(
            name='zgwlrqwswdb',
            options={'verbose_name': '外来有害微生物数据库', 'verbose_name_plural': '外来有害微生物数据库'},
        ),
        migrations.AlterModelOptions(
            name='zgwlrqzwdb',
            options={'verbose_name': '外来有害植物数据库', 'verbose_name_plural': '外来有害植物数据库'},
        ),
        migrations.AlterModelTable(
            name='zgwlrqkcdb',
            table='外来有害昆虫数据库',
        ),
        migrations.AlterModelTable(
            name='zgwlrqwswdb',
            table='外来有害微生物数据库',
        ),
        migrations.AlterModelTable(
            name='zgwlrqzwdb',
            table='外来有害植物数据库',
        ),
    ]
