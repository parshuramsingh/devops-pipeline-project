pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "your-dockerhub-username/devops-pipeline-app"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/YOUR_USERNAME/devops-pipeline-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t $DOCKER_IMAGE .'
                }
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([string(credentialsId: 'dockerhub-pass', variable: 'DOCKERHUB_PASS')]) {
                    sh 'echo $DOCKERHUB_PASS | docker login -u your-dockerhub-username --password-stdin'
                    sh 'docker push $DOCKER_IMAGE'
                }
            }
        }

        stage('Deploy to AWS') {
            steps {
                sh 'ssh -o StrictHostKeyChecking=no ubuntu@your-ec2-ip "bash -s" < deploy.sh'
            }
        }
    }
}