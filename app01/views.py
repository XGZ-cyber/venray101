from django.shortcuts import render,HttpResponse
from app01.models import data
from django.core.paginator import Paginator, EmptyPage
from django.shortcuts import render
from .models import dingshi
from .models import data  # 导入你的数据模型



# Create your views here.
def index(request):
    # 采集概况
    return render(request, 'index.html')

def trend(request):
    # 趋势分析
    data_list = dingshi.objects.all()
    return render(request, 'trend.html',{'data_list':data_list})

def quota(request):
    # 指标分析
    return render(request, 'quota.html')

def chronic(request):
    user_list = data.objects.all()  # 获取所有数据
    paginator = Paginator(user_list, 8)  # 每页显示 5 条记录

    try:
        page = int(request.GET.get('page', 1))
        if page < 1:
            page = 1
    except ValueError:
        page = 1

    total_num = paginator.num_pages  # 总页数

    max_page_num = 10
    half_num = max_page_num // 2

    if total_num < max_page_num:
        page_start = 1
        page_end = total_num
    else:
        if page - half_num < 1:
            page_start = 1
            page_end = max_page_num
        elif page + half_num > total_num:
            page_start = total_num - max_page_num + 1
            page_end = total_num
        else:
            page_start = page - half_num
            page_end = page + half_num

    html_list = [
        '<nav aria-label="Page navigation" class="pagination-container"><ul class="pagination">']

    # 添加首页按钮
    html_list.append(
        '<li class="page-item"><a class="page-link" href="?page=1" aria-label="First">首页</a></li>')

    if page == 1:
        html_list.append(
            '<li class="page-item disabled"><a class="page-link" href="#" aria-label="Previous">&laquo;</a></li>')
    else:
        html_list.append(
            '<li class="page-item"><a class="page-link" href="?page=%s" aria-label="Previous">&laquo;</a></li>' % (
                        page - 1))

    for i in range(page_start, page_end + 1):
        if page == i:
            html_list.append('<li class="page-item active"><a class="page-link" href="?page=%s">%s</a></li>' % (i, i))
        else:
            html_list.append('<li class="page-item"><a class="page-link" href="?page=%s">%s</a></li>' % (i, i))

    if page == total_num:
        html_list.append(
            '<li class="page-item disabled"><a class="page-link" href="#" aria-label="Next">&raquo;</a></li>')
    else:
        html_list.append(
            '<li class="page-item"><a class="page-link" href="?page=%s" aria-label="Next">&raquo;</a></li>' % (
                        page + 1))

        # 添加尾页按钮
    html_list.append(
        '<li class="page-item"><a class="page-link" href="?page=%s" aria-label="Last">尾页</a></li>' % total_num)

    html_list.append('</ul></nav>')

    try:
        page_data = paginator.page(page)
    except EmptyPage:
        page_data = paginator.page(paginator.num_pages)

    return render(request, 'chronic.html',
                  {'user_list': page_data, 'html_list': ''.join(html_list)})


