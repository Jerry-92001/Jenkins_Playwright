pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
		        bat 'npm i -D @playwright/test'
                bat 'npm -v'

            }
        }
    }
}