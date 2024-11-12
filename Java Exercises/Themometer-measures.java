import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.*;
import org.springframework.scheduling.*;
import org.springframework.scheduling.annotation.*;
import org.springframework.scheduling.concurrent.*;
import org.springframework.stereotype.*;
import org.springframework.scheduling.annotation.EnableScheduling; // enables Spring's scheduled task execution capability

@FunctionalInterface
interface TemperatureMeasurementCallback {
    public void temperatureMeasured(int temperature);
}
interface Thermometer {
    public int measure();
}

@Configuration
@EnableScheduling // enables Spring's scheduled task execution capability
@Import({FakeThermometer.class, WeatherForecastService.class})
class Config {
    
    @Bean
    public TemperatureMeasurementCallback callback() {
        System.out.println("Registering TemperatureMeasurementCallback bean");
        return (temperature) -> System.out.println(temperature);
    }
}

@Component
@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE) // creates a new instance of the bean every time it is injected
class FakeThermometer implements Thermometer {

    private int currentTemperature = 21;
    
    @Override
    public int measure() { return currentTemperature++; }
}

@Service
public class WeatherForecastService {

    @Autowired
    private Thermometer thermometer;
    @Autowired
    private TemperatureMeasurementCallback callback;

    @Scheduled(fixedRate = 50) // executed the method every 50 milliseconds
    public void takeTemperatureMeasurement() {
        int temperature = thermometer.measure();
        callback.temperatureMeasured(temperature);
    }   
}