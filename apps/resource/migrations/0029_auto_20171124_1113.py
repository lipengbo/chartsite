# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-11-24 11:13
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('resource', '0028_auto_20171124_1108'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='zgzynywhyc',
            options={'verbose_name': '中国重要农业文化遗产', 'verbose_name_plural': '中国重要农业文化遗产'},
        ),
        migrations.RenameField(
            model_name='zgzynywhyc',
            old_name='dianjishu',
            new_name='clicks',
        ),
    ]