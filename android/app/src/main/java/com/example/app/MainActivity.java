package com.example.app;

import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;  
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {  

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
}
