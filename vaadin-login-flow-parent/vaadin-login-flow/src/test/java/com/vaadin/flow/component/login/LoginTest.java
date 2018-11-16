package com.vaadin.flow.component.login;

import com.vaadin.flow.component.ComponentUtil;
import org.junit.Assert;
import org.junit.Test;

import java.util.concurrent.atomic.AtomicInteger;

public class LoginTest {

    @Test
    public void onForgotPasswordEvent() {
        Login systemUnderTest = new Login();

        AtomicInteger count = new AtomicInteger(0);
        systemUnderTest.addForgotPasswordListener(e -> count.incrementAndGet());

        ComponentUtil.fireEvent(systemUnderTest, new Login.ForgotPasswordEvent(systemUnderTest, false));

        Assert.assertEquals(1, count.get());
    }
}
