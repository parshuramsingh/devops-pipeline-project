pipeline {
    agent any

    environment {
<<<<<<< HEAD
        DOCKER_IMAGE = "your-dockerhub-username/devops-pipeline-app"
=======
        DOCKER_IMAGE = "parshurams/devops-pipeline-app"
>>>>>>> 1196fe4dd5df1b51e00e5f7bd2295c1a5e26803c
    }

    stages {
        stage('Checkout') {
            steps {
<<<<<<< HEAD
                git 'https://github.com/YOUR_USERNAME/devops-pipeline-project.git'
=======
                git 'https://github.com/parshurams/devops-pipeline-project.git'
>>>>>>> 1196fe4dd5df1b51e00e5f7bd2295c1a5e26803c
            }
        }

        stage('Build Docker Image') {
            steps {
<<<<<<< HEAD
                script {
                    sh 'docker build -t $DOCKER_IMAGE .'
                }
=======
                sh 'docker build -t $DOCKER_IMAGE:$BUILD_NUMBER -t $DOCKER_IMAGE:latest .'
>>>>>>> 1196fe4dd5df1b51e00e5f7bd2295c1a5e26803c
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([string(credentialsId: 'dockerhub-pass', variable: 'DOCKERHUB_PASS')]) {
<<<<<<< HEAD
                    sh 'echo $DOCKERHUB_PASS | docker login -u your-dockerhub-username --password-stdin'
                    sh 'docker push $DOCKER_IMAGE'
=======
                    sh 'echo $DOCKERHUB_PASS | docker login -u parshurams --password-stdin'
                    sh 'docker push $DOCKER_IMAGE:$BUILD_NUMBER'
                    sh 'docker push $DOCKER_IMAGE:latest'
>>>>>>> 1196fe4dd5df1b51e00e5f7bd2295c1a5e26803c
                }
            }
        }

        stage('Deploy to AWS') {
            steps {
<<<<<<< HEAD
                sh 'ssh -o StrictHostKeyChecking=no ubuntu@your-ec2-ip "bash -s" < deploy.sh'
            }
        }
    }
}
=======
                withCredentials([sshUserPrivateKey(credentialsId: 'aws-ec2-key', keyFileVariable: 'EC2_KEY')]) {
                    sh '''
                        ssh -i $EC2_KEY -o StrictHostKeyChecking=no ubuntu@your-ec2-ip "
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
}
>>>>>>> 1196fe4dd5df1b51e00e5f7bd2295c1a5e26803c
