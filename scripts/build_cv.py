"""Build the public one-page CV: python scripts/build_cv.py.

Requires reportlab. Only public CV content belongs here; never add offer documents
or private employment terms. Review output/pdf/Markus_CV.pdf before publishing it
to public/Markus_CV.pdf.
"""

from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import (
    Flowable, HRFlowable, KeepTogether, Paragraph, SimpleDocTemplate, Spacer, Table,
    TableStyle,
)

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "Markus_CV.pdf"
WIDTH = A4[0] - 96  # Page margins plus the document frame's internal padding.
INK = colors.HexColor("#17202a")
MUTED = colors.HexColor("#46505b")

body = ParagraphStyle("Body", fontName="Times-Roman", fontSize=10.2,
                      leading=12.5, textColor=INK, spaceAfter=2)
small = ParagraphStyle("Small", parent=body, fontSize=9.5, leading=12)
role_style = ParagraphStyle("Role", parent=body, fontName="Times-Bold", spaceAfter=0)
date_style = ParagraphStyle("Date", parent=role_style, alignment=TA_RIGHT)
company_style = ParagraphStyle("Company", parent=body, fontName="Times-Italic",
                               textColor=MUTED, spaceAfter=3)
location_style = ParagraphStyle("Location", parent=company_style, alignment=TA_RIGHT)
section_style = ParagraphStyle("Section", parent=body, fontName="Times-Bold",
                               fontSize=13, leading=16, spaceAfter=3)
bullet_style = ParagraphStyle("Bullet", parent=body, leftIndent=8, firstLineIndent=0,
                              bulletIndent=0, spaceAfter=1.5)


class Portrait(Flowable):
    def __init__(self):
        super().__init__()
        self.width = self.height = 76

    def draw(self):
        canvas = self.canv
        canvas.saveState()
        path = canvas.beginPath()
        path.circle(38, 38, 38)
        canvas.clipPath(path, stroke=0)
        canvas.drawImage(str(ROOT / "public" / "profile.jpg"), 0, 0, 76, 76,
                         preserveAspectRatio=True, anchor="c", anchorAtXY=False,
                         mask="auto")
        canvas.restoreState()


def section(title):
    return [Spacer(1, 10), Paragraph(title, section_style),
            HRFlowable(width="100%", thickness=0.5, color=MUTED), Spacer(1, 6)]


def job(role, dates, company, location, bullets=(), paragraph=None):
    rows = [
        [Paragraph(escape(role), role_style), Paragraph(escape(dates), date_style)],
        [Paragraph(escape(company), company_style), Paragraph(escape(location), location_style)],
    ]
    table = Table(rows, colWidths=[WIDTH - 150, 150])
    table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    content = [table]
    content.extend(Paragraph(escape(text), bullet_style, bulletText="-") for text in bullets)
    if paragraph:
        content.append(Paragraph(paragraph, body))
    content.append(Spacer(1, 6))
    return KeepTogether(content)


def build():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    title = ParagraphStyle("Name", fontName="Times-Bold", fontSize=23,
                           leading=27, textColor=INK, spaceAfter=4)
    header = Table([[Portrait(), [
        Paragraph("Markus Knutsen", title),
        Paragraph("Analysis Engineer &amp; Developer at Entail", role_style),
        Spacer(1, 4),
        Paragraph("Colletts gate 58A, 0456 Oslo | +47 464 82 902", small),
        Paragraph('<link href="mailto:markus.knutsen@hotmail.com">markus.knutsen@hotmail.com</link>', small),
        Paragraph('<link href="https://linkedin.com/in/markus-knutsen-38a03059"><u>LinkedIn</u></link> | '
                  '<link href="https://github.com/MarkusKnutsen"><u>GitHub</u></link>', small),
    ]]], colWidths=[94, WIDTH - 94])
    header.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    story = [header]
    story += section("Summary")
    story.append(Paragraph(
        "Analysis Engineer &amp; Developer at Entail, combining client-facing analysis with engineering "
        "software development. Background in offshore installation analysis, hydrodynamics, Python automation, "
        "and offshore project engineering. M.Sc. in Marine Technology and Information Technology from NTNU, "
        "specializing in hydrodynamics and CFD. Focused on turning engineering methods into reliable, practical tools.", body))
    story += section("Experience")
    story.append(job("Analysis Engineer & Developer", "Aug 2026 - Present", "Entail AS", "Oslo, Norway", [
        "Combine client-facing analysis with hydrodynamics, visualization, and complex dynamic simulations.",
        "Develop reliable engineering software for analysis workflows and Entail's SaaS platform.",
    ]))
    story.append(job("Installation Analysis Engineer", "Aug 2024 - Jul 2026", "TechnipFMC", "Lysaker, Oslo", [
        "Performed installation analysis of offshore structures and pipelines using OrcaFlex and Python.",
        "Developed and maintained an automatic pipelay analysis tool, improving modularity, simulation state tracking, validation, and engineering workflows.",
        "Served offshore as a project engineer on installation vessels, supporting subsea operations.",
        "Contributed to Utsira High iEPCI, Johan Sverdrup Phase 3, and LNG Mozambique projects.",
    ]))
    story.append(job("Operations Technician", "May 2023 - Jul 2024", "Kiona", "Trondheim, Norway",
                     paragraph="Analyzed sensor and alarm datasets in a 24/7 monitoring center across Norway and Sweden. "
                     "Supported operational troubleshooting, service follow-up, and customer support."))
    story.append(job("Sales Associate", "May 2022 - Jun 2023", "Kjell & Company", "Trondheim, Norway",
                     paragraph="Advised customers on electronics, assessed customer needs, and supported sales, "
                     "customer service, and store management."))
    story.append(job("Conscription - Signal Battalion", "Aug 2017 - Jul 2018", "Norwegian Armed Forces", "Bardufoss, Norway"))
    story += section("Education")
    story.append(job("M.Sc. Marine Technology and Information Technology", "Aug 2018 - Jun 2024", "Norwegian University of Science and Technology (NTNU)", "Trondheim, Norway",
                     paragraph="<b>Thesis:</b> <i>Numerical Investigation of Uniform Flow Around Dual Step Cylinders.</i><br/>"
                     "Specialized in hydrodynamics and CFD. Studied wake topology, vortex shedding, and force response "
                     "in laminar flow (Re ~ 150) around cylindrical structures relevant to offshore engineering."))
    story += section("Skills")
    for label, text in [
        ("Engineering", "Installation analysis, hydrodynamics, CFD, offshore operations, data analysis"),
        ("Tools", "OrcaFlex, Power Automate, Linux"),
        ("Programming", "Python, Git, DevOps, SQL, LaTeX"),
        ("Languages", "Norwegian (native), English (fluent)"),
    ]:
        story.append(Paragraph(f"<b>{label}:</b> {escape(text)}", body))
    doc = SimpleDocTemplate(str(OUTPUT), pagesize=A4, leftMargin=42, rightMargin=42,
                            topMargin=34, bottomMargin=34, title="Markus Knutsen - CV",
                            author="Markus Knutsen", subject="Analysis Engineer & Developer at Entail")
    doc.build(story)
    print(OUTPUT)


if __name__ == "__main__":
    build()
