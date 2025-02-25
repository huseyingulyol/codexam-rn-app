from azure.cognitiveservices.vision.computervision import ComputerVisionClient
from azure.cognitiveservices.vision.computervision.models import OperationStatusCodes
from azure.cognitiveservices.vision.computervision.models import VisualFeatureTypes
from msrest.authentication import CognitiveServicesCredentials

from array import array
import os
from PIL import Image
import sys
import time

import matplotlib.pyplot as plt
import matplotlib.patches as patches
import matplotlib.image as mpimg

from dotenv import load_dotenv
import os

load_dotenv()

subscription_key = os.getenv("AZURE_SUBSCRIPTION_KEY")
endpoint = os.getenv("AZURE_ENDPOINT")

computervision_client = ComputerVisionClient(endpoint, CognitiveServicesCredentials(subscription_key))

async def run_ocr(image_path):
  print(f"===== Reading Image ({image_path})=====")

  with open(image_path, "rb") as image_stream:
    read_response = computervision_client.read_in_stream(image_stream, raw=True)

  read_operation_location = read_response.headers["Operation-Location"]
  operation_id = read_operation_location.split("/")[-1]

  # Call the "GET" API and wait for it to retrieve the results 
  while True:
      read_result = computervision_client.get_read_result(operation_id)
      if read_result.status not in ['notStarted', 'running']:
          break
      time.sleep(1)

  # # Plot image
  # img = mpimg.imread(local_image_path)
  # fig, ax = plt.subplots()
  # ax.imshow(img)

  all_text = ""
  if read_result.status == OperationStatusCodes.succeeded:
      for text_result in read_result.analyze_result.read_results:
          for line in text_result.lines:
              all_text += line.text + "\n"
              # Draw bounding box around the detected text
              # bbox = line.bounding_box
              # rect = patches.Polygon(
              #     [(bbox[0], bbox[1]), (bbox[2], bbox[3]), (bbox[4], bbox[5]), (bbox[6], bbox[7])],
              #     linewidth=2, edgecolor='red', facecolor='none'
              # )
              # ax.add_patch(rect)
              
              # # Optionally, you can add the text next to the box
              # ax.text(bbox[0], bbox[1] - 10, line.text, color='red', fontsize=12)
  # plt.show()
  print("End of Computer Vision.")

  return all_text