package Testing;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Validate {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ChromeDriver driver = new ChromeDriver();
		 driver.get("http://localhost:3000/");
		driver.manage().window().maximize();
		
		//driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(3));
		WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(9));
	String HomePageText =  "";
		try {
	
			 HomePageText =	driver.findElement(By.xpath("/html/body/div/div/div/div/div/div[2]/div[2]/h1")).getText();
		}
		catch (Exception e) {
			// TODO: handle exception
		}
	
	String HomePageValue = "WEDNESDAYS WICKED ADVENTURES";
	
	if(HomePageText.equals(HomePageValue)) {
		
		System.out.println("output"+ HomePageText);
		System.out.println("Passed");
	}
	else {
		System.out.println("Outpu:"+ HomePageText);
		System.out.println("Failed");
	}
		driver.close();	
	}

}
