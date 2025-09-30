#!/bin/bash
set -e

APP_NAME="devops-pipeline-app"
DOCKER_IMAGE="your-dockerhub-username/devops-pipeline-app"

echo "🚀 Deploying $APP_NAME ..."

docker stop $APP_NAME || true
docker rm $APP_NAME || true

docker pull $DOCKER_IMAGE

docker run -d --name $APP_NAME -p 80:3000 $DOCKER_IMAGE

echo "✅ Deployment completed!" 