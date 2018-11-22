/**
 * Created by WebStorm.
 * User: wrf
 * Date: 2018/11/22
 * Time: 16:04
 */
import React, { Component } from 'react'
import { downloadExcel } from "../spi";

class Excel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
      ]
    }
  }
  render () {
    return (
      <div>
        <button onClick={this.jsonToExcel}>导出</button>
      </div>
    )
  }
  jsonToExcel = () => {
    let data = []
    let dataArr1 = [
      {姓名: '***', 性别: '男'},
      {姓名: '***', 性别: '男'},
      {姓名: '***', 性别: '男'},
      {姓名: '***', 性别: '男'},
      {姓名: '***', 性别: '男'},
      {姓名: '***', 性别: '男'},
      {姓名: '***', 性别: '男'},
      {姓名: '***', 性别: '男'},
      {姓名: '***', 性别: '男'}
    ]
    let dataArr2 = [
      {年龄: 20, 职业: '工人'},
      {年龄: 20, 职业: '工人'},
      {年龄: 20, 职业: '工人'},
      {年龄: 20, 职业: '工人'},
      {年龄: 20, 职业: '工人'},
      {年龄: 20, 职业: '工人'},
      {年龄: 20, 职业: '工人'},
      {年龄: 20, 职业: '工人'},
      {年龄: 20, 职业: '工人'},
      {年龄: 20, 职业: '工人'},
      {年龄: 20, 职业: '工人'},
      {年龄: 20, 职业: '工人'},
      {年龄: 20, 职业: '工人'},
      {年龄: 20, 职业: '工人'},
      {年龄: 20, 职业: '工人'}
    ]
    data = [dataArr1, dataArr2]
    let sheetNames = ['表1', '表2']
    let excelName = '2018-11-22'
    downloadExcel(data, sheetNames, excelName)
  }
}

export default Excel