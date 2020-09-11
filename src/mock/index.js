import Mock from 'mockjs'

import banners from '@/mock/banner'
import floors from '@/mock/floor'

Mock.mock('/mock/banners', {code: 200, data:banners})
Mock.mock('/mock/floors', {code: 200, data:floors})