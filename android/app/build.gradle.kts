plugins {
    id("com.android.application")
}

android {
    namespace = "cc.bandgame.bandlife"
    compileSdk = 36

    defaultConfig {
        applicationId = "cc.bandgame.bandlife"
        minSdk = 23
        targetSdk = 36
        versionCode = 19
        versionName = "1.3.18"
    }

    buildTypes {
        debug {
            isMinifyEnabled = false
        }
        release {
            isMinifyEnabled = false
            signingConfig = signingConfigs.getByName("debug")
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }

    packaging {
        resources.excludes += setOf("META-INF/*.kotlin_module")
    }
}
