function num (x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.')
}

// Data for table last 5 sales
let dataSales = [
  {
    jam: '13:00',
    cus: 'Regular',
    Nom: 1275000
  },
  {
    jam: '12:40',
    cus: 'Regular',
    Nom: 575000
  },
  {
    jam: '12:20',
    cus: 'TK. Aum Collection',
    Nom: 3874000
  },
  {
    jam: '12:20',
    cus: 'Margo',
    Nom: 175000
  },
  {
    jam: '12:00',
    cus: 'BMGC',
    Nom: 13775000
  }
]
let tblSales = $('#tbl_last_sales')
$.each(dataSales, function (i = 0) {
  let jam = dataSales[i]['jam']
  let cus = dataSales[i]['cus']
  let nom = dataSales[i]['Nom']
  let isi = `
     <tr>
        <td> ${jam} </td>
        <td> ${cus} </td>
        <td> ${num(nom)} </td>
        <td>
            <a href="" class="btn-sm-bgprimary">Detail</a> 
        </td>
     </tr>
     `
  tblSales.append(isi)
  i++
})
// end of data last 5 sales

// data for table last 5 expenses
let dataExpenses = [
  {
    jam: '12:00',
    des: 'Beli Gas',
    Nom: 25000
  },
  {
    jam: '11:22',
    des: 'Bayar Sampah',
    Nom: 50000
  },
  {
    jam: '11:02',
    des: 'Token Listrik',
    Nom: 103000
  },
  {
    jam: '10:42',
    des: 'Rokok',
    Nom: 31000
  },
  {
    jam: '09:12',
    des: 'Sayur',
    Nom: 10000
  }
]
let tblExpenses = $('#tbl_last_expenses')
$.each(dataExpenses, function (i = 0) {
  let isi = `
     <tr>
        <td> ${dataExpenses[i]['jam']} </td>
        <td> ${dataExpenses[i]['des']} </td>
        <td> ${num(dataExpenses[i]['Nom'])} </td>
        <td>
            <a href="" class="btn-sm-bgprimary">Detail</a> 
        </td>
     </tr>
     `
  tblExpenses.append(isi)
  i++
})
// end off data table last 5 expenses

// data for table purchase order
let dataPurchase = [
  {
    produk: 'Snapkids Surfer',
    varian: 'Merah, 04',
    qty: 2,
    harga: 27000
  },
  {
    produk: 'Snapkids Surfer',
    varian: 'Merah, 06',
    qty: 2,
    harga: 27000
  },
  {
    produk: 'Snapkids Surfer',
    varian: 'Merah, 08',
    qty: 2,
    harga: 27000
  },
  {
    produk: 'Snapkids Surfer',
    varian: 'Biru, 04',
    qty: 2,
    harga: 27000
  },
  {
    produk: 'Snapkids Surfer',
    varian: 'Biru, 06',
    qty: 2,
    harga: 27000
  },
  {
    produk: 'Snapkids Surfer',
    varian: 'Biru, 08',
    qty: 2,
    harga: 27000
  },
  {
    produk: 'Snapkids Surfer',
    varian: 'Hijau, 04',
    qty: 2,
    harga: 27000
  },
  {
    produk: 'Snapkids Surfer',
    varian: 'Hijau, 06',
    qty: 2,
    harga: 27000
  },
  {
    produk: 'Snapkids Surfer',
    varian: 'Hijau, 08',
    qty: 2,
    harga: 27000
  },
  {
    produk: 'Snapkids Surfer',
    varian: 'Kuning, 04',
    qty: 2,
    harga: 27000
  },
  {
    produk: 'Snapkids Surfer',
    varian: 'Kuning, 06',
    qty: 2,
    harga: 27000
  },
  {
    produk: 'Snapkids Surfer',
    varian: 'Kuning, 08',
    qty: 2,
    harga: 27000
  }
]
let tblPurchase = $('#purchase-order')
$.each(dataPurchase, function (i = 0) {
  let no = i
  let produk = dataPurchase[i]['produk']
  let varian = dataPurchase[i]['varian']
  let qty = dataPurchase[i]['qty']
  let harga = dataPurchase[i]['harga']
  let isi = `
        <tr>
            <td>${no + 1}</td>
            <td>${produk}</td>
            <td>${varian}</td>
            <td>
                <input type="number" value="${qty}">
            </td>
            <td>${num(harga)}</td>
            <td>${num(harga * qty)}</td>
            <td>
                <a href="" class="btn btn-sm-liaccent">X</a>
            </td>
        </tr>
    `
  tblPurchase.append(isi)
  i++
})
// end of data for table furchase

// data for table-sales with datatables.js
let dataSalesAll = [
  {
    tggl: '23 Aug 2023',
    wktu: '09:31:12',
    invo: 'INV23090003',
    cust: 'Walk In',
    stat: 'completed',
    empl: 'Husain',
    totl: 2750000
  },
  {
    tggl: '23 Aug 2023',
    wktu: '09:28:02',
    invo: 'INV23090002',
    cust: 'Wadidaw Collection',
    stat: 'kredit',
    empl: 'Ardhi',
    totl: 7895000
  },
  {
    tggl: '23 Aug 2023',
    wktu: '09:26:11',
    invo: 'INV23090001',
    cust: 'Whay ART',
    stat: 'draft',
    empl: 'Zalva',
    totl: 9753000
  },
  {
    tggl: '22 Aug 2023',
    wktu: '21:36:01',
    invo: 'INV23080101',
    cust: 'BMGC',
    stat: 'completed',
    empl: 'Zalva',
    totl: 7265000
  },
]
$('#myTable').DataTable({
  data: dataSalesAll,
  columns: [
    { data: 'tggl' },
    { data: 'wktu' },
    { data: 'invo' },
    { data: 'cust' },
    { data: 'stat' },
    { data: 'empl' },
    { data: 'totl' },
    { data: 'invo' }
  ],

  columnDefs: [
    {
      targets: 4,
      data: 'stat',
      render: function (data) {
        if (data == 'completed') {
          return '<i class="btn-sm-bgprimary">' + data + '</i>'
        } else if (data == 'draft') {
          return '<i class="btn-sm-ligreen">' + data + '</i>'
        } else {
          return '<i class="btn-sm-liaccent">' + data + '</i>'
        }
      }
    },
    {
        targets:6,
        data:'totl',
        render : function (data) { 
            return num(data)
         }
    },
    {
        targets:7,
        data: 'invo',
        render: function(data){
            return '<a href="'+data+'" class="btn-sm-bgaccent">Detail</a>'
        }
    }
  ],

  order: [[0,'desc']]

})




let dataOrderAll = [
  {
    tanggal : '23 Aug 2023',
    order : 'INV23090003',
    vendor : 'Jenal Bintaro',
    status : 'completed',
    oleh : 'Husain',
    total : 2750000
  },
  {
    tanggal : '22 Aug 2021',
    order : 'INV23090002',
    vendor : 'Snap Kids',
    status : 'kredit',
    oleh : 'deby',
    total : 43765000
  },
]
$('#tablePurchase').DataTable({
  data: dataOrderAll,
  columns: [
    { data: 'tanggal' },
    { data: 'order' },
    { data: 'vendor' },
    { data: 'status' },
    { data: 'oleh' },
    { data: 'total' },
    { data: 'order' }
  ],

  columnDefs: [
    {
      targets: 3,
      data: 'stat',
      render: function (data) {
        if (data == 'completed') {
          return '<i class="btn-sm-bgprimary">' + data + '</i>'
        } else if (data == 'draft') {
          return '<i class="btn-sm-ligreen">' + data + '</i>'
        } else {
          return '<i class="btn-sm-liaccent">' + data + '</i>'
        }
      }
    },
    {
        targets:5,
        data:'totl',
        render : function (data) { 
            return num(data)
         }
    },
    {
        targets:6,
        data: 'invo',
        render: function(data){
            return '<a href="'+data+'" class="btn-sm-bgaccent">Detail</a>'
        }
    }
  ],

  order: [[0,'desc']]

})