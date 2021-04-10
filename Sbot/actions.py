rom rasa_core_sdk import Action
import csv
from rasa_sdk.events import SlotSet
import requests

class ActionStock(Action):
   """Asks for an affirmation of the intent if NLU threshold is not met."""

   def name(self):
       return "action_stock"

   def __init__(self):
       self.intent_mappings = {}
       # read the mapping from a csv and store it in a dictionary
       with open('intent_mapping.csv', newline='', encoding='utf-8') as file:
           csv_reader = csv.reader(file)
           for row in csv_reader:
               self.intent_mappings[row[0]] = row[1]

   def run(self, dispatcher, tracker, domain):
      from apixu.client import ApixuClient
		api_key_current = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&interval=5min&apikey=MHSQ3439KYSQ&symbol='
		api_key_hour = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&apikey=MHSQ3439KYSQ$symbol='
      api_key_month = 'https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&apikey=MHSQ3439KYSQ&symbol='
      api_key_info = 'https://www.alphavantage.co/query?function=OVERVIEW&apikey=MHSQ3439KYSQ&symbol='
      
      def current(self, api_key_current):
         resp = requests.get(api_key_current)
            if resp.status_code != 200:
               raise ApiError('GET /tasks/ {}'.format(resp.status_code))
            for todo_item in resp.json():
               print('{} {}'.format(Meta_data['id'], time['closed']))
		
		      loc = tracker.get_slot('location')
		      current = client.getcurrent(q=loc)
		      stock_name = current['main']['stock']
		      response = """The current stock price of {} is ${}.""".format(stock, price)
						
		      dispatcher.utter_message(response)
		   return [SlotSet('stock',loc)]
         
         
       def month(self, api_key_month):
         resp = requests.get(api_key_month)
            if resp.status_code != 200:
               raise ApiError('GET /tasks/ {}'.format(resp.status_code))
            
            for todo_item in resp.json():
               #print('{} {}'.format(todo_item['id'], data['month']))
		
		      loc = tracker.get_slot('stock')
		      current = client.getcurrent(q=loc)
		      stock_name = current['main']['stock']
		      response = """The last 5 months stock prices of {stock} were ${}, ${}, ${}, ${}, ${}.""".format(stock, p1, p2, p3, p4, p5)
						
		      dispatcher.utter_message(response)
		   return [SlotSet('stock',loc)]
         
         
       def hour(self, api_key_hour):
         resp = requests.get(api_key_hour)
            if resp.status_code != 200:
               raise ApiError('GET /tasks/ {}'.format(resp.status_code))
            
            for todo_item in resp.json():
               #print('{} {}'.format(todo_item['id'], data['month']))
		
		      loc = tracker.get_slot('stock')
		      current = client.getcurrent(q=loc)
		      stock_name = current['main']['stock']
		      response = """The last 5 hours stock prices of {stock} were ${}, ${}, ${}, ${}, ${}.""".format(stock, p1, p2, p3, p4, p5)
						
		      dispatcher.utter_message(response)
		   return [SlotSet('stock',loc)]
         
         
       def info(self, api_key_info):
         resp = requests.get(api_key_info)
            if resp.status_code != 200:
               raise ApiError('GET /tasks/ {}'.format(resp.status_code))
            
            for todo_item in resp.json():
               #print('{} {}'.format(todo_item['id'], data['month']))
		
		      loc = tracker.get_slot('stock')
		      current = client.getcurrent(q=loc)
		      stock_name = current['info']['stock']
		      response = """{}""".format(in)
						
		      dispatcher.utter_message(response)
		   return [SlotSet('stock',loc)]
         
      
       # get the most likely intent
       last_intent_name = tracker.latest_message['intent']['name']

       # get the prompt for the intent
       intent_prompt = self.intent_mappings[last_intent_name]

       # Create the affirmation message and add two buttons to it.
       # Use '/<intent_name>' as payload to directly trigger '<intent_name>'
       # when the button is clicked.
       message = "Did you mean '{}'?".format(intent_prompt)
       buttons = [{'title': 'Yes',
                   'payload': '/{}'.format(last_intent_name)},
                  {'title': 'No',
                   'payload': '/out_of_scope'}]
       dispatcher.utter_button_message(message, buttons=buttons)

       return []
      
       
         
       
