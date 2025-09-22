pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "parshurams/devops-pipeline-app"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/parshurams/devops-pipeline-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t $DOCKER_IMAGE:$BUILD_NUMBER .'
                }
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([string(credentialsId: 'dockerhub-pass', variable: 'DOCKERHUB_PASS')]) {
                    sh 'echo $DOCKERHUB_PASS | docker login -u parshurams --password-stdin'
                    sh 'docker push $DOCKER_IMAGE:$BUILD_NUMBER'
                }
            }
        }

        stage('Deploy to AWS') {
            steps {
                sh '''
                    ssh -o StrictHostKeyChecking=no ubuntu@your-ec2-ip "
                        docker pull $DOCKER_IMAGE:$BUILD_NUMBER &&
                        docker stop app || true &&
                        docker rm app || true &&
                        docker run -d --name app -p 3000:3000 $DOCKER_IMAGE:$BUILD_NUMBER
                    "
                '''
            }
        }
    }
}
