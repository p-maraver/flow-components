/*
 * Copyright 2000-2022 Vaadin Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
package com.vaadin.flow.component.tabsheet.tests;

import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Paragraph;
import com.vaadin.flow.component.tabsheet.TabSheet;
import com.vaadin.flow.router.Route;

@Route("vaadin-tabsheet")
public class TabSheetPage extends Div {

    public TabSheetPage() {
        TabSheet tabsheet = new TabSheet();

        // Add prefix component
        tabsheet.setPrefixComponent(new Paragraph("Prefix"));

        tabsheet.addTab("Tab 1", new Paragraph("Tab 1"));
        tabsheet.addTab("Tab 2", new Paragraph("Tab 2"));
        tabsheet.addTab("Tab 3", new Paragraph("Tab 3"));

        // Add suffix component
        tabsheet.setSuffixComponent(new Paragraph("Suffix"));

        add(tabsheet);
    }

}
