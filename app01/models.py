from django.db import models

class data(models.Model):
    name = models.CharField(max_length=512, verbose_name='名称')
    zhonglei = models.CharField(max_length=512, verbose_name='种类')
    caozuo = models.CharField(max_length=512, verbose_name='操作')

class dingshi(models.Model):
    neirong = models.CharField(max_length=512, verbose_name='内容')
    shijian = models.CharField(max_length=512, verbose_name='时间')
    wenben = models.CharField(max_length=512, verbose_name='文本', blank=True, null=True)
