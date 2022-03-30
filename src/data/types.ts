type ItemTypes =

{
  'success': number,
  'product': {
    'name': string,
    'tags': [
      string
    ],
    'options': {
      '1080p': {
        'label': string,
        'price': {
          'value': number,
          'currency': {
            'code': string,
            'symbol': string,
            'format': string
          }
        },
        'old_price': {
          'value': number,
          'currency': {
            'code': string,
            'symbol': string,
            'format': string
          }
        }
      },
      '4k': {
        'label': string,
        'price': {
          'value': number,
          'currency': {
            'code': string,
            'symbol': string,
            'format': string
          }
        },
        'old_price': {
          'value': number,
          'currency': {
            'code': string,
            'symbol': string,
            'format': string
          }
        }
      },
      'battery_accessories': {
        'label': string,
        'price': {
          'value': number,
          'currency': {
            'code': string,
            'symbol': string,
            'format': string
          }
        },
        'old_price': {
          'value': number,
          'currency': {
            'code': string,
            'symbol': string,
            'format': string
          }
        }
      }
    },
    'discount': {
      'amount': string,
      'end_date': string
    },
    'gallery': [
      {
        'main': string
      }
    ],
    'shipping': {
      'method': {
        'country': string,
        'title': string,
        'shipping_time': {
          'value': string,
          'info': string
        },
        'cost': {
          'value': number,
          'currency': {
            'code': string,
            'symbol': string,
            'format': string
          }
        }
      },
      'lead_time': {
        'value': '10 days',
        'info': 'After payment is complete, your order will ship within'
      },
      'props': {
        'ready_to_ship': boolean,
        'in_stock': boolean,
        'fast_dispatch': boolean
      }
    },
    'reviews': {
      'rating': string,
      'count': number,
      'total_buyers': number
    }
  }
}

export default ItemTypes;
